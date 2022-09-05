import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from '../Components/footer/index';

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe("Footer Component changes background", () => {

    render(<Footer />);
    const footer = screen.getByTestId("footer");

    // Test 1
    test("Footer renders", () => {
        expect(footer).toBeInTheDocument();
    })

    // Test 2
    test("Footer background starts with gif animation", () => {
        expect(footer).toHaveAttribute("background-image", "url(stars.gif)")
    })
    // Test 3
    test("Footer background changes to solid color on Home page", () => {
        const newUrl = '/countries';
        window.history.pushState({}, '/countries');
        expect(footer).toHaveAttribute("background-image", "null)")
    })
})
