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
    const isFinished = targets[index] === name;
    const hasFinishedTyping = isFinished && !isDeleting;
    const shouldStartTyping = name.length === 0;

    const interval = setInterval(
      () => {
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
      isDeleting ? deletingDelay : hasFinishedTyping ? 1000 : typingDelay
    );
    return () => clearInterval(interval);
  }, [targets, typingDelay, deletingDelay, name, isDeleting, index]);

  return (
    <InputBase
      value={name}
      inputProps={{
        "aria-label": "typewriter",
        readOnly: true,
        style: { fontSize: 30 },
      }}
    />
  );
};

export default Typewriter;
