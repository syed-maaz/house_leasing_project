import React from "react";
import { Route } from "react-router-dom";
import { Content } from "./Content";

export function ContentRoute(arqs) {
  console.log(arqs);
  const { children, component, render, ...props } = arqs;
  console.log(children);
  return (
    <Route {...props}>
      {routeProps => {
        console.log(routeProps);
        if (typeof children === "function") {
          return <Content>{children(routeProps)}</Content>;
        }

        if (!routeProps.match) {
          return null;
        }

        if (children) {
          return <Content>{children}</Content>;
        }

        if (component) {
          return (
            <Content>{React.createElement(component, routeProps)}</Content>
          );
        }

        if (render) {
          return <Content>{render(routeProps)}</Content>;
        }

        return null;
      }}
    </Route>
  );
}
