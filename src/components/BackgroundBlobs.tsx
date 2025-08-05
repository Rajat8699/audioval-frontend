import { BLOB_CONFIGS } from "@/lib/constants";
import { BackgroundBlob } from "./ui/background-blob";

export default function BackgroundBlobs() {
    return (
        <>
            {/* Top Left - Primary */}
            <BackgroundBlob
                className={BLOB_CONFIGS.primary.className}
                style={{
                    ...BLOB_CONFIGS.primary.style,
                    top: "-120px",
                    left: "-285px",
                    transform: "rotate(0deg)",
                    zIndex: 1,
                }}
            />
            {/* Top Right - White */}
            <BackgroundBlob
                className={BLOB_CONFIGS.white.className}
                style={{
                    ...BLOB_CONFIGS.white.style,
                    top: "-100px",
                    left: "650px",
                    transform: "rotate(0deg)",
                    zIndex: 1,
                }}
            />
            {/* Below Top Left - Purple */}
            <BackgroundBlob
                className={BLOB_CONFIGS.purple.className}
                style={{
                    ...BLOB_CONFIGS.purple.style,
                    top: "678.25px",
                    left: "-141.75px",
                    transform: "rotate(-88.76deg)",
                    zIndex: 1,
                }}
            />
            {/* Below Top Right - Large */}
            <BackgroundBlob
                className={BLOB_CONFIGS.large.className}
                style={{
                    ...BLOB_CONFIGS.large.style,
                    top: "563px",
                    left: "925px",
                    transform: "rotate(75deg)",
                    zIndex: 1,
                }}
            />
            {/* 2nd Below Top Left - PrimaryAlt */}
            <BackgroundBlob
                className={BLOB_CONFIGS.primaryAlt.className}
                style={{
                    ...BLOB_CONFIGS.primaryAlt.style,
                    top: "712.5px",
                    left: "-196px",
                    transform: "rotate(0deg)",
                    zIndex: 1,
                }}
            />
        </>
    )
};