import React from "react";

export default function Contact() {
  return (
    <div className="">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 mt-4">
        {/* Left: Contact Text */}
        <div className="w-100 w-md-50">
          <h2>Contact Us</h2>
          <p className="text-muted">
            Questions or need assistance? Our team is here to help and will get
            back to you promptly.
          </p>
        </div>

        {/* Right: Image (hidden on small screens) */}
        <div className="w-100 w-md-50 d-none d-md-flex justify-content-end">
          <img
            src="/contact.jpg"
            alt="Contact"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className="row mb-4" style={{ marginTop: "-70px" }}>
        <div className="col-md-10">
          <div className="row g-3">
            {/* Phone Card */}
            <div className="col-md-4 d-flex">
              <div
                className="card-contact p-4 d-flex flex-column justify-content-center align-items-center text-center w-100 h-100"
                style={{ backgroundColor: "#f8d7da", color: "#01c49b" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-headset"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                </svg>
                <h5>Call Us On</h5>
                <p className="text-muted">+254 7090 084 094</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="col-md-4 d-flex">
              <div
                className="card-contact p-4 d-flex flex-column justify-content-center align-items-center text-center w-100 h-100"
                style={{ backgroundColor: "#e6ffdb", color: "#01c49b" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <h5>WhatsApp</h5>
                <p className="text-muted">+254 7090 084 094</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="col-md-4 d-flex">
              <div
                className="card-contact p-4 d-flex flex-column justify-content-center align-items-center text-center w-100 h-100"
                style={{ backgroundColor: "#e6f6ff", color: "#01c49b" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
                <h5>Email</h5>
                <p className="text-muted">info@datisoftwares.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card border-0 rounded-4">
              <div className="card-body p-5">
                <h4 className=" mb-4">Contact Form</h4>
                <form>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="subject"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control form-control-sm"
                      id="message"
                      rows="6"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-custome btn-sm">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
