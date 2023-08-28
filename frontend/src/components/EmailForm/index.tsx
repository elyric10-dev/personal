import React, {
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import EmailSendIcon from "~/shared/icons/EmailSendIcon";
import emailjs from "emailjs-com";
import CheckIcon from "~/shared/icons/CheckIcon";
import useIsDark from "~/hooks/useIsDark";

type formErrors = {
  email: string;
  message: string;
};

function EmailForm() {
  const isDark = useIsDark();
  const form = useRef<HTMLFormElement | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<formErrors>();

  const validateForm = () => {
    const newErrors: formErrors = {
      email: "",
      message: "",
    };

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!message) newErrors.message = "Message is required";
    else if (message.length <= 20)
      newErrors.message = "Must be greater than 20 characters";

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");

    return isValid;
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      if (form.current) {
        emailjs
          .sendForm(
            "service_cwd5dwb",
            "template_i11sk0c",
            form.current,
            "r3hwGbD7VTxFvTebT"
          )
          .then((response) => {
            setIsLoading(false);
            console.log("Email sent successfully:", response);
            setIsSent(true);
          })
          .catch((error) => {
            console.error("Email sending failed:", error);
            setIsSent(false);
          });
      }
    } else {
      console.log("Not okay!");
    }
  };

  const clearForm = () => {
    setEmail("");
    setMessage("");
    setIsSent(false);
    setIsLoading(false);
    setErrors({
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`${
        isDark ? "bg-slate-800" : "bg-slate-400"
      } border-[rgba(255,255,255,0.5 grid gap-4 rounded border p-4`}
    >
      <form ref={form} className="grid gap-4" onSubmit={sendEmail}>
        <input
          name="from_email"
          type="email"
          placeholder="Email:"
          value={email}
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="focus:border-red-500 rounded-md py-2 pl-2 focus:outline-[#3a4658]"
        />
        <p className={`${isDark ? "text-dark" : "text-rose-600"}`}>
          {errors?.email}
        </p>
        <textarea
          required
          name="message"
          placeholder="Message here..."
          rows={7}
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          className="overflow-x-hidden rounded-md py-2 pl-2 scrollbar-hide focus:outline-[#3a4658]"
        />
        <p className={`${isDark ? "text-dark" : "text-rose-600"}`}>
          {errors?.message}
        </p>
      </form>
      <button
        className={`${
          isSent
            ? "bg-green-600"
            : "bg-gradient-to-tl from-[#3a4658] to-[#212832]"
        } trans mt-6 flex cursor-pointer justify-center gap-2 rounded border border-[rgba(255,255,255,0.3)] px-3 py-3 text-gray-100 shadow-sm hover:shadow-md`}
        onClick={sendEmail}
        disabled={isSent || isLoading ? true : false}
      >
        {isSent ? (
          <CheckIcon className="h-5 w-5 fill-gray-200" />
        ) : isLoading ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        ) : (
          <EmailSendIcon className="h-5 w-5 fill-gray-200" />
        )}

        <span className="text-sm font-semibold">
          {isSent ? "Email Sent" : "Send Email"}
        </span>
      </button>

      {isSent ? (
        <div
          onClick={clearForm}
          className={`${
            isDark ? "text-blue-400" : "text-blue-800"
          } w-full cursor-pointer text-center text-xs hover:underline`}
        >
          <p>Send Another Email</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EmailForm;
