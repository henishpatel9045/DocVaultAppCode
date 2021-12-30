import React from "react";
import DocDetailCompo from "../../components/DocDetailCompo";
import DocScreen from "./DocScreen";

export default function CertificateScreen({ data }) {
  return (
    <DocScreen>
      <DocDetailCompo label={"Issueing Authority"} detail={data} />
    </DocScreen>
  );
}
