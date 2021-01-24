export interface AllListsProps {
  input: string;
}
export interface CopyProps {
  allLists: AllListsProps[] | [];
  setNewAllList: (allLists: any) => void;
}
export interface SVGProps {
  size: number;
  color: string;
}
