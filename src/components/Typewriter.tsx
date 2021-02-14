import React, { useEffect, useState } from "react";
import { InputBase } from "@material-ui/core";

const Typewriter: React.FunctionComponent<{
  targets: Array<string>;
  typingDelay: number;
  deletingDelay: number;
}> = ({ targets, typingDelay, deletingDelay }) => {
  const [name, setName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const isFinished = targets[index] === name;
        const shouldStartTyping = name.length === 0;

        const hasFinishedTyping = isFinished && !isDeleting;
        if (hasFinishedTyping) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setName(name.slice(0, name.length - 1));
          if (shouldStartTyping) {
            const nextIndex = index === targets.length - 1 ? 0 : index + 1;
            setIndex(nextIndex);
            setIsDeleting(false);
          }
          return;
        } else {
          setName((name) => name + targets[index][name.length]);
          return;
        }
      },
      isDeleting ? deletingDelay : typingDelay
    );
    return () => clearInterval(interval);
  }, [targets, typingDelay, deletingDelay, name, isDeleting, index]);

  return <InputBase value={name} inputProps={{ "aria-label": "typewriter" }} />;
};

export default Typewriter;
