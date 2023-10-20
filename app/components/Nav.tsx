import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">FusionHarbor</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Tokens
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            NFTs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Solana Pay
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            DAO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Jupiter
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Select Wallet
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
