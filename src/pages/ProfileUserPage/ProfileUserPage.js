import React from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import "./style.scss";
import { useParams } from "react-router-dom";
import ProfileUser from "../../components/ProfileUser/ProfileUser";

function ProfileUserPage() {
  const params = useParams();
  return (
    <PageTemplate>
      <ProfileUser id={params.id} />
    </PageTemplate>
  );
}

export default ProfileUserPage;
