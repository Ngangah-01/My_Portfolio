import { useState } from "react";
import { MdDownload, MdCheckCircle, MdErrorOutline } from "react-icons/md";

export default function DownloadCVButton() {
    const [status, setStatus] = useState("idle"); // idle | downloading | done | error
    const [progress, setProgress] = useState(0);

    const triggerDownload = (blob, filename) => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(blobUrl);
    };

    const downloadWithProgress = async () => {
        try {
            setStatus("downloading");
            setProgress(0);

            const minimumDuration = 1800; // 1.8 seconds minimum animation
            const startTime = Date.now();

            const url = "/cv/NH_CV.pdf";
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch file");

            const blob = await res.blob();

            // Fake smooth progress up to 90%
            let fakeProgress = 0;
            const fakeInterval = setInterval(() => {
                fakeProgress += 2;
                if (fakeProgress <= 90) {
                    setProgress(fakeProgress);
                }
            }, 40);

            // Ensure animation runs minimum duration
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(minimumDuration - elapsed, 0);

            setTimeout(() => {
                clearInterval(fakeInterval);
                setProgress(100);

                // Trigger actual download
                triggerDownload(blob, "NH_CV.pdf");

                setStatus("done");

                setTimeout(() => {
                    setStatus("idle");
                    setProgress(0);
                }, 1400);
            }, remaining);

        } catch (e) {
            console.error(e);
            setStatus("error");
            setTimeout(() => {
                setStatus("idle");
                setProgress(0);
            }, 1500);
        }
    };

    const label =
        status === "downloading"
            ? `Downloading… ${progress}%`
            : status === "done"
                ? "Downloaded ✓"
                : status === "error"
                    ? "Download failed"
                    : "Download CV";

    const Icon =
        status === "done" ? MdCheckCircle : status === "error" ? MdErrorOutline : MdDownload;

    return (
        <button
            onClick={downloadWithProgress}
            disabled={status === "downloading"}
            className="group relative overflow-hidden flex items-center justify-center gap-3
                h-14 px-10 bg-primary text-background-dark text-base font-bold rounded
                hover:bg-white hover:scale-105 transition-all duration-300
                shadow-[0_0_20px_rgba(60,249,26,0.3)]
                w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {/* Progress fill */}
            <span
                className="absolute inset-0 bg-black/20"
                style={{
                    transform: `translateX(${progress - 100}%)`,
                    transition: status === "downloading" ? "transform 120ms linear" : "none",
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
                <span className="inline-flex items-center justify-center">
                    <Icon className={`text-lg ${status === "downloading" ? "animate-spin" : ""}`} />
                </span>
                <span>{label}</span>
            </span>
        </button>
    );
}