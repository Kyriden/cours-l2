import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Layout from './layout';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

it('renders without crashing', () => {

    act(() => {
        render(<Layout />, container);
    });
    expect(document.querySelector("[data-testid='layout']").textContent).toMatch(
        "Age", "Mail", "Address", "Phone"
    );
});

