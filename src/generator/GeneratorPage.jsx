import React, { useMemo, useState } from "react";
import Swal from "sweetalert2";
import {
  DEFAULT_DISPLAY_NAME,
  DEFAULT_PUBLIC_LINK,
  DEFAULT_WHATSAPP_MESSAGE,
} from "./generatorData";
import {
  buildInvitationLink,
  buildWhatsAppMessage,
  copyToClipboard,
  normalizeGuestName,
  parseBulkNames,
} from "./generatorUtils";
import "./Generator.css";

export default function GeneratorPage() {
  const [guestName, setGuestName] = useState("Bunda/Ayah/Teman Istimewa");
  const [displayName, setDisplayName] = useState(DEFAULT_DISPLAY_NAME);
  const [baseLink, setBaseLink] = useState(DEFAULT_PUBLIC_LINK);
  const [messageTemplate, setMessageTemplate] = useState(DEFAULT_WHATSAPP_MESSAGE);
  const [bulkText, setBulkText] = useState("");

  const singleLink = useMemo(() => {
    return buildInvitationLink(baseLink, displayName || guestName);
  }, [baseLink, displayName, guestName]);

  const singleMessage = useMemo(() => {
    return buildWhatsAppMessage(messageTemplate, singleLink);
  }, [messageTemplate, singleLink]);

  const bulkNames = useMemo(() => parseBulkNames(bulkText), [bulkText]);

  const bulkResults = useMemo(() => {
    return bulkNames.map((name) => {
      const link = buildInvitationLink(baseLink, name);
      return {
        name,
        link,
        message: buildWhatsAppMessage(messageTemplate, link),
      };
    });
  }, [bulkNames, baseLink, messageTemplate]);

  const toast = (title) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title,
      showConfirmButton: false,
      timer: 1600,
      background: "#111",
      color: "#fff",
    });
  };

  const handleCopyLink = async () => {
    await copyToClipboard(singleLink);
    toast("Link berhasil disalin");
  };

  const handleCopyMessage = async () => {
    await copyToClipboard(singleMessage);
    toast("Pesan berhasil disalin");
  };

  const handlePreview = () => {
    window.open(singleLink, "_blank", "noopener,noreferrer");
  };

  const handleResetSingle = () => {
    setGuestName("Bunda/Ayah/Teman Istimewa");
    setDisplayName(DEFAULT_DISPLAY_NAME);
    setBaseLink(DEFAULT_PUBLIC_LINK);
    setMessageTemplate(DEFAULT_WHATSAPP_MESSAGE);
  };

  const handleCopyAllLinks = async () => {
    const text = bulkResults.map((item) => `${item.name}\n${item.link}`).join("\n\n");
    await copyToClipboard(text);
    toast("Semua link berhasil disalin");
  };

  const handleCopyAllMessages = async () => {
    const text = bulkResults
      .map((item) => `Untuk: ${item.name}\n\n${item.message}`)
      .join("\n\n--------------------\n\n");

    await copyToClipboard(text);
    toast("Semua pesan berhasil disalin");
  };

  return (
    <main className="generator-page">
      <div className="generator-wrap">
        <header className="generator-header">
          <div className="generator-kicker">DASHBOARD GENERATOR</div>
          <h1 className="generator-title">GENERATOR LINK UNDANGAN</h1>
          <p className="generator-subtitle">
            Buat link undangan, preview nama tamu, dan salin pesan WhatsApp siap kirim
            dalam satu tempat.
          </p>
        </header>

        <section className="generator-grid">
          <div className="generator-card">
            <div className="generator-card-head">
              <h2>Generator Satuan</h2>
              <p>Untuk membuat 1 link dan 1 pesan WhatsApp.</p>
            </div>

            <div className="generator-body">
              <label className="generator-label">NAMA TAMU</label>
              <input
                className="generator-input"
                value={guestName}
                onChange={(e) => {
                  setGuestName(e.target.value);
                  setDisplayName(e.target.value);
                }}
                placeholder="Contoh: Bapak Ahmad Fauzi"
              />

              <label className="generator-label">NAMA TAMPIL</label>
              <input
                className="generator-input"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Contoh: Tamu Kehormatan"
              />

              <label className="generator-label">LINK PUBLIK</label>
              <input
                className="generator-input"
                value={baseLink}
                onChange={(e) => setBaseLink(e.target.value)}
              />

              <label className="generator-label">PESAN WHATSAPP</label>
              <textarea
                className="generator-textarea"
                value={messageTemplate}
                onChange={(e) => setMessageTemplate(e.target.value)}
              />

              <div className="generator-actions">
                <button className="generator-btn red" onClick={handleCopyLink}>
                  Copy Link
                </button>
                <button className="generator-btn green" onClick={handleCopyMessage}>
                  Copy Pesan
                </button>
                <button className="generator-btn dark" onClick={handlePreview}>
                  Preview
                </button>
                <button className="generator-btn dark" onClick={handleResetSingle}>
                  Reset
                </button>
              </div>

              <div className="generator-result">
                <strong>Preview Link:</strong>
                <br />
                {singleLink}
              </div>
            </div>
          </div>

          <div className="generator-card">
            <div className="generator-card-head">
              <h2>Bulk Generator</h2>
              <p>Paste banyak nama sekaligus, satu nama per baris.</p>
            </div>

            <div className="generator-body">
              <label className="generator-label">DAFTAR NAMA</label>
              <textarea
                className="generator-textarea"
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                placeholder={`Contoh:
Brigadir Irawan
Bapak Ahmad Fauzi
Ibu Siti Rahma
Keluarga Besar Hidayat`}
              />

              <div className="generator-bulk-actions">
                <div className="generator-counter">
                  <span>TOTAL NAMA</span>
                  <strong>{bulkResults.length}</strong>
                </div>

                <button
                  className="generator-btn red"
                  onClick={handleCopyAllLinks}
                  disabled={!bulkResults.length}
                >
                  Copy Semua Link
                </button>

                <button
                  className="generator-btn green"
                  onClick={handleCopyAllMessages}
                  disabled={!bulkResults.length}
                >
                  Copy Semua Pesan
                </button>
              </div>

              <button className="generator-btn dark" onClick={() => setBulkText("")}>
                Reset Bulk
              </button>

              <div className="generator-list">
                {bulkResults.length === 0 ? (
                  <div className="generator-result">
                    Belum ada data. Masukkan daftar nama untuk mulai generate.
                  </div>
                ) : (
                  bulkResults.map((item) => (
                    <div className="generator-list-item" key={item.name}>
                      <strong>{normalizeGuestName(item.name)}</strong>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.link}
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="generator-tip">
          <strong>Tips:</strong> Untuk generator satuan, isi satu nama lalu klik{" "}
          <strong>Copy Pesan</strong> agar bisa langsung ditempel ke WhatsApp. Untuk
          bulk generator, tempel banyak nama satu per baris lalu gunakan{" "}
          <strong>Copy Semua Link</strong> atau <strong>Copy Semua Pesan</strong>.
        </div>
      </div>
    </main>
  );
}