import type { ReactNode } from "react";

type IntroProps = {
  kicker?: ReactNode;
  headline: ReactNode;
  body?: ReactNode;
  align?: "start" | "center";
};

export function Intro({ kicker, headline, body, align = "start" }: IntroProps) {
  return (
    <div className={`intro intro--${align}`}>
      {kicker ? <p className="intro__kicker">{kicker}</p> : null}
      <h2 className="intro__headline">{headline}</h2>
      {body ? <p className="intro__body">{body}</p> : null}
    </div>
  );
}
