STL Playground
==============

Goals:

  * Read STL files using NodeJS ( **DONE** )
  * Render STL files using HTML Canvas ( **WIP** )
  * Control home-made 3D Printer via Arduino.


Install
-------

	port install pkgconfig cairo
	sm install


Usage
-----

Parse STL file and log polygon data:

	./scripts/stl-parse ./resources/rectangle.stl

Export STL file to PNG ( **WIP** ):

	./scripts/stl-to-png ./resources/rectangle.stl


Discussion
----------

  * http://www.okmakerspace.com/forum/viewtopic.php?f=1&t=8


Links
-----

  * http://en.wikipedia.org/wiki/STL_(file_format) (STereoLithography) Standard Triangulation Language file format
  * [Arduino](http://www.arduino.cc/) electronics prototyping platform
  * [SketchUp](http://www.sketchup.com/) CAD software
    * https://github.com/SketchUp/sketchup-stl - STL import/export extension
    * http://www.ennex.com/~fabbers/StL.asp


License
-------

[UNLICENSE](http://unlicense.org/)
