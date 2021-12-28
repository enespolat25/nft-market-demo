import "../styles/globals.css";
import Link from "next/link";

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">
          Gazi Üniversitesi Uzaktan Eğitim Merkezi NFT Market
        </p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Ana Sayfa</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">NFT Oluştur</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">Aldığım NFTlerim</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500"> NFT Oluşturucu Sayfası</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default Marketplace;
