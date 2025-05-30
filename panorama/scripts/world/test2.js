/**
 * Example of javascript usage on panorama world panels.
 * In this example both TestFunction and TestFunction global
 * will be called via Hammer IO.
 */
'use strict';

class Test2
{
    static our_panel = $('#OurPanel');

    static {}

    static TestFunction()
    {
        const label = $.CreatePanel('Label', this.our_panel, '')
        label.text = "Hello world!";

        $.Msg("Hello world!")
    }
}

function TestFunctionGlobal()
{
    const label = $.CreatePanel('Label', $('#OurPanel'), '')
    label.text = "Called TestFunctionGlobal!";

    $.Msg("Called TestFunctionGlobal!")
}