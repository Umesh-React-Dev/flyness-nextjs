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

function IconPlane() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconCalendarCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="m9 15 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8 14h2M12 14h2M16 14h.01M8 17h2M12 17h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconTerminal() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconRefund() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 7.5v9M14.5 9.5c0-1-1-1.5-2.5-1.5s-2.5.5-2.5 1.5 1 1.3 2.5 1.5 2.5.5 2.5 1.5-1 1.5-2.5 1.5-2.5-.5-2.5-1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPlaneTilt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.2 14.8 3.5 12.2l1.1-1.8 5.2 1.4L15.5 5l1.7 1.2-5.7 7.6 1.4 5.2-1.8 1.1-2.6-6.7-2.9 2.9-.9-.9 2.5-2.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconSad() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M8.5 16c1-.9 2.1-1.4 3.5-1.4s2.5.5 3.5 1.4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLuggage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="7" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.75" />
      <text x="12" y="15.5" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="700">
        KG
      </text>
    </svg>
  );
}

function IconBadge() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5 4.5 5.5v5.2c0 5.1 3.4 9.8 7.5 11.3 4.1-1.5 7.5-6.2 7.5-11.3V5.5L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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

function IconMinimize() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
      <path
        d="M4.9002 5L2.8002 3L0.700195 5M2.8002 3V9.66667C2.8002 10.0203 2.94769 10.3594 3.21025 10.6095C3.4728 10.8595 3.82889 11 4.2002 11H8.4002M10.5002 9L12.6002 11L14.7002 9M12.6002 11V4.33333C12.6002 3.97971 12.4527 3.64057 12.1901 3.39052C11.9276 3.14048 11.5715 3 11.2002 3H7.0002"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}

const SECTIONS: QuickSection[] = [
  {
    title: "About Booking",
    actions: [
      { id: "status", label: "Check Flight Status", icon: <IconPlane /> },
      { id: "search", label: "Search For Flight", icon: <IconCalendarCheck /> },
      { id: "manage", label: "Manage My Bookings", icon: <IconCalendar /> },
      { id: "terminal", label: "Terminal Details", icon: <IconTerminal /> },
    ],
  },
  {
    title: "Refunds",
    actions: [
      { id: "policy", label: "What's The Refund Policy?", icon: <IconRefund /> },
      {
        id: "cancel-refund",
        label: "Can I Get A Refund For My Cancelled Flight?",
        icon: <IconPlaneTilt />,
      },
    ],
  },
  {
    title: "Baggage Queries",
    actions: [
      { id: "lost", label: "I Lost My Suitcase", icon: <IconSad /> },
      { id: "allowance", label: "How Much Luggage Can I Carry?", icon: <IconLuggage /> },
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
              <IconRefresh />
            </button>
          )}
          <button
            type="button"
            className="flynasAI__iconBtn"
            onClick={onClose}
            aria-label="Minimize Flynas AI"
          >
            <IconMinimize />
          </button>
          {inChat && (
            <button
              type="button"
              className="flynasAI__iconBtn"
              onClick={onClose}
              aria-label="Close Flynas AI"
            >
              <IconClose />
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
