import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function ToggleDark(props) {
  const [dark, setDark] = React.useState(!localStorage.getItem("darkMode"));
  return (
    <div>
      <div>
        <label>
          <Form>
            <FormGroup switch>
              <Input
                check
                checked={dark}
                color="dark"
                type="switch"
                role="switch"
                onClick={() => {
                  props.toggleDark();
                  // localStorage.setItem("darkMode", dark);
                  setDark(Boolean(localStorage.getItem("darkMode")));
                }}
              />
              {!dark ? (
                <Label check>Switch to light mode</Label>
              ) : (
                <Label check>Switch to dark mode</Label>
              )}
            </FormGroup>
          </Form>

          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
}
