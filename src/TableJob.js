import { Component } from "react";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

class TableJob extends Component {
  render() {
    const { removeSong, songTitles, song } = this.props;

    return (
      <table>
        <TableHeader songTitles={songTitles} />
        <TableBody removeSong={removeSong} song={song} />
      </table>
    );
  }
}

export default TableJob;
