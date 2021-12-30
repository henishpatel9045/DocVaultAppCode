import CertificateScreen from "../screens/DisplayScrees/CertificateScreen";
import DocScreen from "../screens/DisplayScrees/DocScreen";
import PassbookScreen from "../screens/DisplayScrees/PassbookScreen";
import ResultScreen from "../screens/DisplayScrees/ResultScreen";

export default function DocSelectCompo({ route }) {
  const type = route.params.type;
  if (type === "result") return <ResultScreen data={route.params} />;
  else if (type === "passbook") return <PassbookScreen data={route.params} />;
  else if (type === "certificate")
    return <CertificateScreen data={route.params} />;
  else return <DocScreen type={type} data={route.params} />;
}
