import React from 'react';
import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../LocaleContext";
import i18n from "../../i18n";

export default function Selectlanguage () {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <Navbar id="header-nav-bar" positon="fixed" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={locale === 'en' ? 'ms-auto' : 'me-auto'}>
            <NavDropdown title={t('language')} id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => changeLocale('ta')}>தமிழ்</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}