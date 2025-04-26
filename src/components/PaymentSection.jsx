import React, { useState } from 'react';
import { Download, Copy, Share2, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import qrCodeImage from '../assets/qr_code.jpg'

const PaymentSection = () => {
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [copied, setCopied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const upiId = 'svhsreunion@ybl';
  const phoneNumber = '+91 99001 97160';

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const shareData = {
      title: 'SVHS 2009 Batch Reunion Payment',
      text: `Pay for SVHS 2009 Batch Reunion using UPI: ${upiId} or Phone: ${phoneNumber}`,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log('Error sharing', err));
    }
  };

  const handleDownloadQR = () => {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      `upi://pay?pa=${upiId}&pn=SVHS Reunion&am=`
    )}`;

    const link = document.createElement('a');
    link.href = qrCodeImage;
    link.download = 'SVHS-Reunion-QR.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const simulatePayment = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="payment" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">
          Contribute to Our Reunion
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <p className="text-gray-700 text-center mb-6">
            Your contribution helps us make this reunion memorable. Pay what you can to support venue expenses, food, and activities.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Why contribute?</h3>
            <p className="text-gray-700 text-sm">
              After many years, we're finally reuniting! Your contribution helps cover resort booking, meals, and activities for our full-day event, making this reunion special for everyone.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button
              onClick={() => setSelectedMethod('upi')}
              className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                selectedMethod === 'upi'
                  ? 'bg-blue-600 text-white font-medium shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>UPI Payment</span>
            </button>

            <button
              onClick={() => setSelectedMethod('phone')}
              className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                selectedMethod === 'phone'
                  ? 'bg-blue-600 text-white font-medium shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>Phone Payment</span>
            </button>
          </div>

          {selectedMethod === 'upi' && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 transition-all animate-fade-in">
              <div className="flex flex-col items-center mb-6">
                <div className="w-48 h-48 bg-white rounded-lg shadow-md mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={qrCodeImage}
                    alt="QR Code for payment"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-gray-700 mb-1">Scan with any UPI app</p>
                <div className="flex items-center gap-2">
                  {/* <span className="font-medium text-blue-800">+91 99001 97160</span> */}
                  {/* <button
                    onClick={() => handleCopy(upiId)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </button> */}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleDownloadQR}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Download size={16} />
                  <span>Download QR</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Share2 size={16} />
                  <span>Share Details</span>
                </button>
              </div>
            </div>
          )}

          {selectedMethod === 'phone' && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 transition-all animate-fade-in">
              <div className="text-center mb-6">
                <Phone size={32} className="text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800 mb-1">Phone Payment</h3>
                <p className="text-gray-600 mb-4">Send payment directly to:</p>

                <div className="bg-blue-50 py-3 px-4 rounded-lg inline-flex items-center gap-2 mb-4">
                  <span className="font-medium text-blue-800">{phoneNumber}</span>
                  <button
                    onClick={() => handleCopy(phoneNumber)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                <p className="text-sm text-gray-600">
                  Works with Google Pay, PhonePe, Paytm and more!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Share2 size={16} />
                  <span>Share Details</span>
                </button>
              </div>
            </div>
          )}

          {/* <button
            onClick={simulatePayment}
            className="w-full py-4 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-md"
          >
            <span>Pay Now</span>
            <ArrowRight size={18} />
          </button> */}

          {showSuccess && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2 animate-fade-in">
              <CheckCircle size={18} />
              <span>Thank you for your contribution! We can't wait to see you at the reunion!</span>
            </div>
          )}
        </div>

        <div className="text-center text-gray-600 text-sm">
          <p>Having trouble with payment? Contact our treasurer at +91 99001 97160</p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
