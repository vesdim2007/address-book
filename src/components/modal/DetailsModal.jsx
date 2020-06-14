/**
 * @typedef {Object} Props
 * @property {boolean} isOpen Indicates if the modal is visible
 * @property {function} onClose Function for closing the modal
 * @property {Object} location User location details
 * @property {string} location.state User state name
 * @property {string} location.city User city name
 * @property {string} location.postcode User state postcode
 * @property {Object} location.street User street details
 * @property {string} location.street.name User street name
 * @property {number} location.street.number User street number
 * @property {string} phone User phone number
 * @property {string} cell User cell phone number
 */

/**
 * Modal for showing user details
 *
 * @type {import('react').FunctionComponentElement<Props>}
 */

/**
 * Returns Modal with user details
 *
 * @returns {JSX.Element}
 */

import React from "react";
import {
  SModal,
  SModalContent,
  SModalColumn,
  SModalData,
} from "../../styles/Modal.style";

export default function DetailsModal({
  isOpen,
  onClose,
  location,
  cell,
  phone,
}) {
  /**
   * Forming array with elements with static and dynamic data for the user lcation data
   * @constant
   * @type {Array<{label: string, value: string | number}>} data
   * The elements of the array are used to form the rows in the modal
   */

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
