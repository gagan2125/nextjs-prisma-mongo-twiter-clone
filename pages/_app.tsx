import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal actionlabel="Submit" isOpen title="Test Modal" /> */}
    <RegisterModal/>
    <LoginModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
