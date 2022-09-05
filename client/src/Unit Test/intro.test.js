import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Intro from '../Pages/Intro/index';
import { useState } from "react";

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe("testing Into Page", () => {

    render(<Intro />);
    const intro = screen.getByTestId("intro");
    const introTitle = screen.getByTestId("introTitle");
    const animationBckgrd = screen.getByTestId("animationBckgrd");
    const glowBtn = screen.getByTestId("glowBtn");
    const joke = screen.getByTestId("joke");

    // Test 1
    test("Intro renders", () => {
        expect(intro).toBeInTheDocument();
        expect(introTitle).toBeInTheDocument();
        expect(animationBckgrd).toBeInTheDocument();
        expect(glowBtn).toBeInTheDocument();
        expect(joke).toBeInTheDocument();
    })

    // Test 2
    test("Intro background starts with gif animation", () => {
        expect(animationBckgrd).toHaveAttribute("background-image", "url(stars.gif)")
    })
    // Test 3
    test("glowBtn is normal", () => {
        expect(glowBtn).toHaveAttribute("background", "null)");
        expect(glowBtn).toHaveAttribute("boxShadow", "null");
    })

    // Test 
    test("glowBtn hoover runs", () => {
        const [isHovering, setIsHovering] = useState(false);
        setIsHoovering(true);

        expect(glowBtn).toHaveAttribute("background", "#0e0088ee)");
        expect(glowBtn).toHaveAttribute("boxShadow", "0 0 50px #1424ff");
    })
})
