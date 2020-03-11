import React from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector(state => state.userdata);

  return (
    <Container>
      <aside>
        <strong>{user.name}</strong>
        {user.favorites.lenght}
      </aside>

      <main>main</main>
    </Container>
  );
}
