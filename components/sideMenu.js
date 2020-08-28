import React from 'react';
import Link from 'next/link';
import '../styles/sideMenu.css'


const SideMenu = () => {
  return (
    <div className="side-neumorphic">
      <div className="list-group">
        <a href="https://rodolphe-augusto.fr" target="new" className="list-group-item text-side"> Développeur </a>
        <Link href="/therapeute">
          <a className="list-group-item text-side"> Thérapeute </a>
        </Link>
        <Link href="/lapidaire">
          <a className="list-group-item text-side"> Lapidaire </a>
        </Link>
        <Link href="/blogs">
          <a data-tooltip="Ici les articles du blog sont affichés sous forme de cartes... &#xa; &#xa;"
            data-tooltip-location="bottom" className="list-group-item text-side"> Blog </a>
        </Link>
        <Link href="/jeux">
          <a className="list-group-item text-side opt"> Les Jeux Amano-Hilot </a>
        </Link>
      </div>
      <style jsx>{`
        .list-group {
          box-shadow: 1px 1px 14px black;
        }
        .text-side {
          opacity: 1
        }
      `}</style>
    </div>
  )
}

export default SideMenu;
