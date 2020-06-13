import React from "react";
import {
  SModal,
  SModalContent,
  SModalColumn,
  SModalData,
} from "../styles/Modal.style";

export default function DetailsModal({
  isOpen,
  onClose,
  location,
  cell,
  phone,
}) {
  const data = [
    { label: "State:", value: location.state },
    { label: "City:", value: location.city },
    { label: "Postcode:", value: location.postcode },
    { label: "Street name:", value: location.street.name },
    { label: "Street number:", value: location.street.number },
    { label: "Phone:", value: phone },
    { label: "Cell:", value: cell },
  ];
  return (
    <SModal
      isOpen={isOpen}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <h3>User Details:</h3>
      {data.map((d, i) => (
        <SModalContent key={i}>
          <SModalColumn>
            <SModalData bold={true}>{d.label}</SModalData>
          </SModalColumn>
          <SModalColumn>
            <SModalData bold={false}>{d.value}</SModalData>
          </SModalColumn>
        </SModalContent>
      ))}
    </SModal>
  );
}
