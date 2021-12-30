import React from "react";
import DocDetailCompo from "../../components/DocDetailCompo";
import DocScreen from "./DocScreen";

export default function CertificateScreen({ data }) {
  return (
    <DocScreen data={data}>
      {data.issuingAuthority != "" && (
        <DocDetailCompo
          label={"Issueing Authority"}
          detail={data.issuingAuthority}
        />
      )}
    </DocScreen>
  );
}
