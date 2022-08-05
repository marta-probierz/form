export default interface IButton {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
}
