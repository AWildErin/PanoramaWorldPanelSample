function Test3CallFunction()
{
    local ent = EntityGroup[0];
    // Calls the function on Test3 (test3.ts) called OnVScriptCall with
    // the parameter "hello".
    ent.RunJSScript("Test3.OnVScriptCall('hello')");
}

function Test3AddClass()
{
    local ent = EntityGroup[0]
    ent.AddCSSClass("my-cool-class");
}

function Test3RemoveClass()
{
    local ent = EntityGroup[0]
    ent.RemoveCSSClass("my-cool-class");
}