/**
 * Created by eddy spreeuwers on 14-02-18.
 */
import * as fs from "fs";
import { generateClassesFromXSD } from "../src/generateClassesFromXSD";

describe("generator", () => {
    describe("generator simpleClass", () => {
        let simpleClassXsd = "";
        let simpleInheritedClassXsd = "";
        let formClassXsd = "";

        beforeEach(() => {
            simpleClassXsd = fs.readFileSync("./test/simpleClass.xsd").toString();
            simpleInheritedClassXsd = fs.readFileSync("./test/simpleInheritedClass.xsd").toString();
            formClassXsd = fs.readFileSync("./test/form.xsd").toString();
        });

        it(" has function generateClassesFromXSD", () => {
            expect(generateClassesFromXSD).toBeDefined();
        });

        it("ClassGenerator heeft een types property", () => {
            expect(()=>generateClassesFromXSD("./test/simpleClass.xsd")).not.toThrow();
        });
        it("ClassGenerator heeft een types property", () => {
            expect(()=>generateClassesFromXSD("./test/importedClass.xsd", {dep: "xml-parser"})).not.toThrow();
        });

        it("ClassGenerator heeft een types property", () => {
            expect(()=>generateClassesFromXSD("./test/simpleInheritedClass.xsd", {dep: "xml-parser"})).not.toThrow();
        });

        it("ClassGenerator heeft een types property", () => {
            expect(()=>generateClassesFromXSD("./test/form.xsd")).not.toThrow();
        });
    });
});
