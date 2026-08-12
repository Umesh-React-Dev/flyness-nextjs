export const HELP_COMPLAINT_HERO = {
  title: "Submit a Complaint",
  subtitle:
    "We're sorry you had a negative experience. Help us make it right.",
};

export const HELP_COMPLAINT_STEP = {
  title: "Details",
};

export const HELP_COMPLAINT_FORM_HEADER = {
  title: "Complaint or Feedback Details",
  description:
    "Please provide details about your complaint so we can address it properly.",
};

export const HELP_COMPLAINT_UPLOAD = {
  title: "Supporting Documents",
  dropzoneTitle: "Choose files or drag & drop them here",
  dropzoneHint:
    "Images (JPG, PNG, WEBP), PDF, Word (DOC, DOCX). Max 5MB per file.",
  maxFiles: 5,
};

export const HELP_COMPLAINT_MOBILITY = {
  label: "This case relates to disability or reduced mobility",
  hint: "Optional. Select if your complaint involves accessibility or mobility support.",
};

export const HELP_COMPLAINT_FIELDS = {
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
    hint: "Your 6-character booking reference (required)",
    required: true,
  },
  subject: {
    label: "Subject",
    placeholder: "Brief subject of your complaint",
    required: true,
  },
  description: {
    label: "Description",
    placeholder:
      "Please provide detailed information about your complaint (minimum 5 words)",
    hint: "Minimum 5 words, maximum 5000 characters",
    required: true,
    minWords: 5,
    maxLength: 5000,
  },
};
