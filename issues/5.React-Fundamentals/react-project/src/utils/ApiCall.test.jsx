import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ApiCall from "../components/ApiCall";
import instance from "../services/api";

jest.mock("../services/api");

describe("ApiCall Component - GET Tests", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("renders GET button", () => {
		render(<ApiCall />);

		const getButton = screen.getByText("Test GET Request");

		expect(getButton).toBeInTheDocument();
		expect(getButton).not.toBeDisabled();
	});

	test("GET request displays data successfully", async () => {
		const mockData = {
			id: 1,
			title: "Mi post de prueba",
			body: "Este es mi primer post, me cuesta trabajo entender cada paso pero vale la pena el proceso",
		};

		instance.get.mockResolvedValue({
			data: mockData,
			status: 200,
		});

		render(<ApiCall />);

		const getButton = screen.getByText("Test GET Request");
		fireEvent.click(getButton);

		await waitFor(() => {
			expect(screen.getByText(/Mi post de prueba/i)).toBeInTheDocument();
		});

		expect(instance.get).toHaveBeenCalledWith("/posts/1");
		expect(instance.get).toHaveBeenCalledTimes(1);
	});

	test("GET request displays error when it fails", async () => {
		instance.get.mockRejectedValue(new Error("Network Error"));

		render(<ApiCall />);
		const getButton = screen.getByText("Test GET Request");
		fireEvent.click(getButton);

		await waitFor(() => {
			expect(screen.getByText(/Error: Network Error/i)).toBeInTheDocument();
		});

		expect(instance.get).toHaveBeenCalledWith("/posts/1");
	});
});
