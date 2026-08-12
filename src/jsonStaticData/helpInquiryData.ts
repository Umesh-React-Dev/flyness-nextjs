export const HELP_INQUIRY_HERO = {
  title: "Submit an Inquiry",
  subtitle:
    "Have a question? We're here to help you get the information you need.",
};

export const HELP_INQUIRY_DETAILS = {
  title: "Inquiry Details",
  description:
    "Please provide details about your inquiry so we can assist you properly.",
};

export const HELP_INQUIRY_UPLOAD = {
  title: "Supporting Documents",
  dropzoneTitle: "Choose files or drag & drop them here",
  dropzoneHint:
    "Images (JPG, PNG, WEBP), PDF, Word (DOC, DOCX). Max 5MB per file.",
  maxFiles: 5,
};

export const HELP_INQUIRY_FIELDS = {
  firstName: {
    label: "First Name",
    placeholder: "Enter your first name",
    required: true,
  },
  lastName: {
    label: "Last Name",
    placeholder: "Enter your last name",
    required: true,
  },
  email: {
    label: "Email Address",
    placeholder: "Enter your email address",
    required: true,
  },
  phone: {
    label: "Phone Number",
    placeholder: "966501234567",
    hint: "Enter numbers only (e.g., 966501234567)",
    required: true,
  },
  pnr: {
    label: "Booking Reference (PNR)",
    placeholder: "e.g. ABC123",
    hint: "Your 6-character booking reference",
    required: false,
  },
  subject: {
    label: "Subject",
    placeholder: "Brief subject of your inquiry",
    required: true,
  },
  description: {
    label: "Description",
    placeholder:
      "Please provide detailed information about your inquiry (minimum 5 words)",
    hint: "Minimum 5 words, maximum 5000 characters",
    required: true,
    minWords: 5,
    maxLength: 5000,
  },
};
