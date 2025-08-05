import { BLOB_CONFIGS } from "@/lib/constants";
import { BackgroundBlob } from "./ui/background-blob";
import { memo } from "react";

// Extracted blob configurations for better maintainability
const BLOB_POSITIONS = [
    {
        config: BLOB_CONFIGS.primary,
        position: {
            top: "-120px",
            left: "-285px",
            transform: "rotate(0deg)",
            zIndex: 1,
        },
    },
    {
        config: BLOB_CONFIGS.white,
        position: {
            top: "-100px",
            left: "650px",
            transform: "rotate(0deg)",
            zIndex: 1,
        },
    },
    {
        config: BLOB_CONFIGS.purple,
        position: {
            top: "678.25px",
            left: "-141.75px",
            transform: "rotate(-88.76deg)",
            zIndex: 1,
        },
    },
    {
        config: BLOB_CONFIGS.large,
        position: {
            top: "563px",
            left: "925px",
            transform: "rotate(75deg)",
            zIndex: 1,
        },
    },
    {
        config: BLOB_CONFIGS.primaryAlt,
        position: {
            top: "712.5px",
            left: "-196px",
            transform: "rotate(0deg)",
            zIndex: 1,
        },
    },
] as const;

const BackgroundBlobs = memo(() => {
    return (
        <>
            {BLOB_POSITIONS.map((blob, index) => (
                <BackgroundBlob
                    key={`blob-${index}`}
                    className={blob.config.className}
                    style={{
                        ...blob.config.style,
                        ...blob.position,
                    }}
                />
            ))}
        </>
    );
});

BackgroundBlobs.displayName = "BackgroundBlobs";

export default BackgroundBlobs;