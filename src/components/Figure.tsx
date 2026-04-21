export const Figure = (props: any) => {
  if (props.title !== undefined) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.title}</figcaption>
      </figure>
    );
  } else {
    return <img src={props.src} alt={props.alt} />;
  }
}

export const DoubleFigure = (props: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <figure style={{ flex: 1 }}>
        <img src={props.src1} alt={props.alt1} style={{ width: "100%" }} />
        <figcaption>{props.title1}</figcaption>
      </figure>
      <figure style={{ flex: 1 }}>
        <img src={props.src2} alt={props.alt2} style={{ width: "100%" }} />
        <figcaption>{props.title2}</figcaption>
      </figure>
    </div>
  );
}