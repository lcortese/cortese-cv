import React from "react";
import type { WrapperProps } from "../components/@types";
import Page from '../components/Layout/Page'

const Main = ({ children }: WrapperProps)=> <Page>{children}</Page>;

export default Main;
