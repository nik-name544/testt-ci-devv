import { fireEvent, render } from "@testing-library/react";
import App from './App';
import React from "react"

describe("try test", () => { 
    it("work", () => {
        const { getByText } = render(<App />)
        expect(getByText("num:0")).toBeInTheDocument()
        fireEvent.click(getByText("click"))
        expect(getByText("num:1")).toBeInTheDocument()
        fireEvent.click(getByText("click"))
        expect(getByText("num:2")).toBeInTheDocument()
    })
})