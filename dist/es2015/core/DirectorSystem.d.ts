import { IO } from "wonder-fantasy-land/dist/es2015/types/IO";
import { Map } from "immutable";
export declare var getState: (DirectorData: any) => any;
export declare var setState: (state: Map<any, any>, DirectorData: any) => IO;
export declare var markIsInit: (DirectorData: any) => void;
export declare var isInit: (DirectorData: any) => boolean;
export declare var run: any;
export declare var render: any;
export declare var updateSystem: (elapsed: number, state: Map<any, any>) => any;
export declare var initData: (DirectorData: any) => void;
