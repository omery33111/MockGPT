import React, { useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";

interface AdvancedFeaturesNoTokenProps {
  show: boolean;
  onHide: () => void;
}

const AdvancedFeaturesNoToken: React.FC<AdvancedFeaturesNoTokenProps> = ({ show, onHide }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
      onHide(); // Close the modal when clicking outside
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} centered>
      <div
        ref={modalContentRef}
        data-radix-popper-content-wrapper=""
        dir="ltr"
        style={{
          position: "fixed",
          left: "0px",
          top: "0px",
          transform: "translate(52px, 56px)",
          minWidth: "max-content",
          zIndex: 50,
        }}
      >
        <div
          data-side="bottom"
          data-align="start"
          role="menu"
          aria-orientation="vertical"
          data-state="open"
          data-radix-menu-content=""
          dir="ltr"
          id="radix-:rn:"
          aria-labelledby="radix-:rm:"
          className="z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2 min-w-[340px] overflow-hidden"
        >
          <div className="p-4">
            <div className="mb-4">
              <p className="text-md mb-1 font-medium text-token-text-primary">
                Log in to try advanced features
              </p>
              <p className="text-sm text-token-text-secondary text-[#5D5D5D]">
                Get smarter responses, upload files, analyze images, and more by logging in.
              </p>
            </div>
            <div className="flex space-x-2 mr-[8px]">
              <button className="bg-black text-white w-[69.33px] h-[38px] py-1 rounded-[30px] text-sm whitespace-nowrap font-semibold enabled:hover:bg-[rgba(0,0,0,0.87)]">
                Log in
              </button>
              <button className="bg-white text-black w-[78.34px] h-[38px] py-1 rounded-[30px] border border-gray-300 text-sm whitespace-nowrap font-semibold hidden md:block enabled:hover:bg-[rgba(0,0,0,0.020)]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AdvancedFeaturesNoToken;
