export type IconData = { [key: string]: string };
export type IconTags = { [key: string]: string[] };
export type IconsList = { [key: string]: IconData };
export type EmptyObject = { [key: string]: never };
export type BasicComponent = {
  name: String;
  props?: object;
  template?: String;
};
export type MultiLevelObject = { [key: string]: {} };
