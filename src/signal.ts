export const signal = <T>(value: T, onChange: (value: T) => void) => ({
  get value() {
    return value;
  },
  set value(newValue: T) {
    value = newValue;
    onChange(newValue);
  },
});
