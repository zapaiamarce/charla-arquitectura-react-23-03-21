import Head from "next/head";
import { PrimaryButton } from "../../ui/buttons";
import { useMiDato } from "../../lib/hooks";

export default function Home() {
  const miDato = useMiDato();
  return (
    <div>
      Hola soy la home y este es mi dato {miDato}
      <PrimaryButton>Soy un botón</PrimaryButton>
    </div>
  );
}
