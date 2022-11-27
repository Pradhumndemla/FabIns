import { useEffect } from "react";
import Story from "./Story";
import StoryStart from "./StoryStart";

export default function Stories() {

    useEffect(() => {
        let scriptTag = document.createElement("script");
        scriptTag.src = "assets/dist/tiny-slider/js/tinySlider.js";
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        }
    });

    return (
        <>
            <div className="my-slider">
                    <StoryStart />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
            </div>
        </>
    );
}