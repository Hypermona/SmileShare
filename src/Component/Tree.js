import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { TreeItem } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function Tree() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Comedy">
        <TreeItem nodeId="2" label="Memes" />
        <TreeItem nodeId="3" label="Funny" />
        <TreeItem nodeId="4" label="For Boys" />
      </TreeItem>
      <TreeItem nodeId="1" label="Comedy">
        <TreeItem nodeId="2" label="Memes" />
        <TreeItem nodeId="3" label="Funny" />
        <TreeItem nodeId="4" label="For Boys" />
      </TreeItem>
      <TreeItem nodeId="1" label="Comedy">
        <TreeItem nodeId="2" label="Memes" />
        <TreeItem nodeId="3" label="Funny" />
        <TreeItem nodeId="4" label="For Boys" />
      </TreeItem>
      <TreeItem nodeId="1" label="Comedy">
        <TreeItem nodeId="2" label="Memes" />
        <TreeItem nodeId="3" label="Funny" />
        <TreeItem nodeId="4" label="For Boys" />
      </TreeItem>
      <TreeItem nodeId="1" label="Comedy">
        <TreeItem nodeId="2" label="Memes" />
        <TreeItem nodeId="3" label="Funny" />
        <TreeItem nodeId="4" label="For Boys" />
      </TreeItem>
    </TreeView>
  );
}
