import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "../components/Message";

describe("Message Component", () => {
	test("rendering the component with initial message", () => {
		render(<Message />);

		expect(screen.getByText("Simple Message")).toBeInTheDocument();
		expect(screen.getByText("Hi! Please Click the button")).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /click me/i })
		).toBeInTheDocument();
	});

	test("updates message when button is clicked", () => {
		render(<Message />);

		const button = screen.getByRole("button", { name: /click me/i });

		fireEvent.click(button);

		expect(screen.getByText("Button clicked 1 time(s)")).toBeInTheDocument();
	});

	test("counts multiple button clicks", () => {
		render(<Message />);

		const button = screen.getByRole("button", { name: /click me/i });

		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);

		expect(screen.getByText("Button clicked 3 time(s)")).toBeInTheDocument();
	});
});
