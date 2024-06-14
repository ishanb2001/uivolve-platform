import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// Keyframes for animations
const bounce = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 0.7;
  }
  70% {
    transform: scale(1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const reverseBounce = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
`;

// Styled components
const Container = styled.div`
  font-family: "Inter", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  color: rgb(93, 93, 93);
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.3s;
  height: 20px;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const DropdownMenuStyled = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 1px;
  font-weight: 500;
  background-color: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  min-width: 200px;
  transform-origin: top;

  ${(props) =>
    props.active &&
    css`
      display: block;
      animation: ${bounce} 0.5s forwards;
    `}

  ${(props) =>
    props.hiding &&
    css`
      animation: ${reverseBounce} 0.2s forwards;
    `}
`;

const DropdownLink = styled.a`
  padding: 10px 2px 2px 10px;
  margin: 5px;
  font-size: 14px;
  border-radius: 10px;
  display: block;
  text-decoration: none;
  color: black;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Paragraph = styled.p`
  margin-top: 0;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.3rem;
  font-weight: 400;
  color: #848484;
`;

const DropdownMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [closingDropdown, setClosingDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown !== null &&
        !event.target.closest(".nav") &&
        !event.target.closest(".dropdown")
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDropdown]);

  const closeDropdown = () => {
    if (activeDropdown !== null) {
      setClosingDropdown(true);
      setTimeout(() => {
        setActiveDropdown(null);
        setClosingDropdown(false);
      }, 200); // Duration of reverseBounce animation
    }
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      closeDropdown();
    } else {
      setActiveDropdown(index);
      setClosingDropdown(false);
    }
  };

  return (
    <Container>
      <Nav className="nav">
        <NavItem>
          <NavLink
            href="#"
            className="button border-grey"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(0);
            }}
          >
            Dropdown
          </NavLink>
          <DropdownMenuStyled
            className={`dropdown ${activeDropdown === 0 ? "active" : ""} ${
              closingDropdown ? "hiding" : ""
            }`}
            active={activeDropdown === 0}
            hiding={closingDropdown}
          >
            <DropdownLink href="#">
              Menu 1-1
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing.
              </Paragraph>
            </DropdownLink>
            <DropdownLink href="#">
              Menu 1-1
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing.
              </Paragraph>
            </DropdownLink>
            <DropdownLink href="#">
              Menu 1-1
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing.
              </Paragraph>
            </DropdownLink>
          </DropdownMenuStyled>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default DropdownMenu;