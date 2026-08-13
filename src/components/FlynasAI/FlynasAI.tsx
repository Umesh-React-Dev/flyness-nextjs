"use client";

import Image from "next/image";
import {
  FormEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import CalendarCheckIcon from "@/assets/icons/CalendarCheckIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import LuggageIcon from "@/assets/icons/LuggageIcon";
import MinimizeIcon from "@/assets/icons/MinimizeIcon";
import PlaneIcon from "@/assets/icons/PlaneIcon";
import PlaneTiltIcon from "@/assets/icons/PlaneTiltIcon";
import RefreshIcon from "@/assets/icons/RefreshIcon";
import RefundIcon from "@/assets/icons/RefundIcon";
import SadFaceIcon from "@/assets/icons/SadFaceIcon";
import TerminalPinIcon from "@/assets/icons/TerminalPinIcon";
import logo from "@/assets/images/flynas-logo-green.svg";
import sendIcon from "@/assets/images/flynas-ai-send.svg";
import "./FlynasAI.scss";

type FlynasAIProps = {
  open: boolean;
  onClose: () => void;
};

type QuickAction = {
  id: string;
  label: string;
  icon: ReactNode;
};

type QuickSection = {
  title: string;
  actions: QuickAction[];
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
};

function formatTime(date = new Date()) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function IconSend() {
  return (
    <Image
      src={sendIcon}
      alt=""
      width={44}
      height={44}
      className="flynasAI__sendIcon"
      aria-hidden="true"
    />
  );
}

const SECTIONS: QuickSection[] = [
  {
    title: "About Booking",
    actions: [
      { id: "status", label: "Check Flight Status", icon: <PlaneIcon /> },
      { id: "search", label: "Search For Flight", icon: <CalendarCheckIcon /> },
      { id: "manage", label: "Manage My Bookings", icon: <CalendarIcon /> },
      { id: "terminal", label: "Terminal Details", icon: <TerminalPinIcon /> },
    ],
  },
  {
    title: "Refunds",
    actions: [
      { id: "policy", label: "What's The Refund Policy?", icon: <RefundIcon /> },
      {
        id: "cancel-refund",
        label: "Can I Get A Refund For My Cancelled Flight?",
        icon: <PlaneTiltIcon />,
      },
    ],
  },
  {
    title: "Baggage Queries",
    actions: [
      { id: "lost", label: "I Lost My Suitcase", icon: <SadFaceIcon /> },
      { id: "allowance", label: "How Much Luggage Can I Carry?", icon: <LuggageIcon /> },
    ],
  },
];

const ASSISTANT_REPLIES: Record<string, string> = {
  status:
    "I can help you check your flight status. Please share your flight number or booking reference.",
  search:
    "Sure! Tell me your departure city, destination, and travel dates, and I’ll help you search for flights.",
  manage:
    "I can help you manage your booking. Please share your booking reference and last name.",
  terminal:
    "I can share terminal details for your flight. Which airport or flight number should I look up?",
  policy:
    "Refund eligibility depends on your fare type and how close you are to departure. Share your booking reference and I’ll check the policy for you.",
  "cancel-refund":
    "If your flight was cancelled, you may be eligible for a refund or rebooking. Share your booking reference so I can check your options.",
  lost: "I’m sorry about your suitcase. Please share your booking reference and baggage tag number if you have it, and I’ll guide you on next steps.",
  allowance:
    "Baggage allowance depends on your fare and route. Share your booking reference or cabin class and I’ll confirm how much you can carry.",
};

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    content,
    time: formatTime(),
  };
}

export default function FlynasAI({ open, onClose }: FlynasAIProps) {
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const inChat = messages.length > 0;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 180);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!inChat) return;
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, inChat]);

  const sendUserMessage = (text: string, actionId?: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage = createMessage("user", trimmed);
    const reply =
      (actionId && ASSISTANT_REPLIES[actionId]) ||
      "Thanks for your message! How else can I help with your travel plans today?";

    setMessages((prev) => [...prev, userMessage, createMessage("assistant", reply)]);
    setMessage("");
  };

  const handleAction = (action: QuickAction) => {
    sendUserMessage(action.label, action.id);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendUserMessage(message);
  };

  const handleRefresh = () => {
    setMessages([]);
    setMessage("");
    window.setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div
      id="flynas-ai-dialog"
      ref={panelRef}
      className={`flynasAI${open ? " is-open" : ""}${inChat ? " is-chat" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-hidden={!open}
    >
      <header className="flynasAI__header">
        <div className="flynasAI__brand">
          <Image
            src={logo}
            alt=""
            width={28}
            height={28}
            className="flynasAI__logo"
            aria-hidden="true"
          />
          <h2 id={titleId} className="flynasAI__title">
            Flynas AI
          </h2>
        </div>
        <div className="flynasAI__headerActions">
          {inChat && (
            <button
              type="button"
              className="flynasAI__iconBtn"
              onClick={handleRefresh}
              aria-label="Start a new chat"
            >
              <RefreshIcon />
            </button>
          )}
          <button
            type="button"
            className="flynasAI__iconBtn"
            onClick={onClose}
            aria-label="Minimize Flynas AI"
          >
            <MinimizeIcon />
          </button>
          {inChat && (
            <button
              type="button"
              className="flynasAI__iconBtn"
              onClick={onClose}
              aria-label="Close Flynas AI"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </header>

      <div className="flynasAI__body">
        {!inChat ? (
          <>
            <div className="flynasAI__welcome">
              <span className="flynasAI__badge">
              <Image
            src={logo}
            alt=""
            width={28}
            height={28}
            className="flynasAI__logo"
            aria-hidden="true"
          />
              </span>
              <p className="flynasAI__greeting">Hi There!</p>
              <p className="flynasAI__intro">
                Good day! This is Flynas AI, your travel assistant. Need help with a
                flight or booking?
              </p>
            </div>

            {SECTIONS.map((section) => (
              <section key={section.title} className="flynasAI__section">
                <h3 className="flynasAI__sectionTitle">{section.title}</h3>
                <div className="flynasAI__grid">
                  {section.actions.map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      className="flynasAI__action"
                      onClick={() => handleAction(action)}
                    >
                      <span className="flynasAI__actionIcon">{action.icon}</span>
                      <span className="flynasAI__actionLabel">{action.label}</span>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <div className="flynasAI__chat" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((msg) =>
              msg.role === "assistant" ? (
                <div key={msg.id} className="flynasAI__row flynasAI__row--assistant">
                  <Image
                    src={logo}
                    alt=""
                    width={28}
                    height={28}
                    className="flynasAI__avatar"
                    aria-hidden="true"
                  />
                  <div className="flynasAI__bubble flynasAI__bubble--assistant">
                    <p className="flynasAI__bubbleText">{msg.content}</p>
                    <time className="flynasAI__time">{msg.time}</time>
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flynasAI__row flynasAI__row--user">
                  <div className="flynasAI__bubble flynasAI__bubble--user">
                    <p className="flynasAI__bubbleText">{msg.content}</p>
                    <time className="flynasAI__time">{msg.time}</time>
                  </div>
                </div>
              ),
            )}
            <div ref={chatEndRef} />
          </div>
        )}
      </div>

      <form className="flynasAI__footer" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="flynasAI__input"
          placeholder={inChat ? "Chat with Flynas" : "Type your message..."}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-label="Message"
        />
        <button
          type="submit"
          className="flynasAI__send"
          aria-label="Send message"
          disabled={!message.trim()}
        >
          <IconSend />
        </button>
      </form>
    </div>
  );
}
