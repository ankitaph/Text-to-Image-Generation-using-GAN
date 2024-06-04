 /**//*
This repository provides native TensorFlow execution in backend JavaScript applications under the Node.js runtime, accelerated by the TensorFlow C binary under the hood. It provides the same API as TensorFlow.js.

This package will work on Linux, Windows, and Mac platforms where TensorFlow is supported.

Installing
TensorFlow.js for Node currently supports the following platforms:

Mac OS X CPU (10.12.6 Siera or higher)
Linux CPU (Ubuntu 14.04 or higher)
Linux GPU (Ubuntu 14.04 or higher and Cuda 11.2 w/ CUDNN v8) (see installation instructions)
Windows CPU (Win 7 or higher)
Windows GPU (Win 7 or higher and Cuda 11.2 w/ CUDNN v8) (see installation instructions)
For GPU support, tfjs-node-gpu@1.2.4 or later requires the following NVIDIA® software installed on your system:

Name	Version
NVIDIA® GPU drivers	>450.x
CUDA® Toolkit	11.2
cuDNN SDK	8.1.0
Other Linux variants might also work but this project matches core TensorFlow installation requirements.
Windows / Mac OS X Requires Python 2.7
Windows & OSX build support for node-gyp requires Python 2.7. Be sure to have this version before installing @tensorflow/tfjs-node or @tensorflow/tfjs-node-gpu. Machines with Python 3.x will not install the bindings properly.

For more troubleshooting on Windows, check out WINDOWS_TROUBLESHOOTING.md.

Mac OS X Requires Xcode
If you do not have Xcode setup on your machine, please run the following commands:

$ xcode-select --install
For Mac OS Catalina please follow this guide to install node-gyp.

After that operation completes, re-run yarn add or npm install for the @tensorflow/tfjs-node package.

You only need to include @tensorflow/tfjs-node or @tensorflow/tfjs-node-gpu in the package.json file, since those packages ship with @tensorflow/tfjs already.

Mac OS X with M1 chip
For Mac with M1 chip, tfjs-node only support arm64 build. To install tfjs-node, you need to ensure rosetta has been turned off on your terminal app. Start your terminal and verify following command shows arm64 as response:

uname -m
Install your node version with arm64 binary. You can verify that with following command also shows arm64:

node -e 'console.log(os.arch())'
Now you can install tfjs-node as described before.

Rebuild the package on Raspberry Pi
To use this package on Raspberry Pi, you need to rebuild the node native addon with the following command after you installed the package:

$ npm rebuild @tensorflow/tfjs-node --build-from-source
Custom binaries URI
If you happen to be using a mirror for the libtensorflow binaries (default is [https://storage.googleapis.com/]), you have 3 options (in order of priority):

Set the environment variable TFJS_NODE_CDN_STORAGE. This has the same behavior as CDN_STORAGE, but introduced to prevent collisions with other npm packages that might use CDN_STORAGE.
TFJS_NODE_CDN_STORAGE="https://yourmirrorofchoice.com/" npm install <package>
(or)
TFJS_NODE_CDN_STORAGE="https://yourmirrorofchoice.com/" yarn install <package>
Add the variable TFJS_NODE_CDN_STORAGE to your .npmrc file.
TFJS_NODE_CDN_STORAGE=https://yourmirrorofchoice.com/
Set the environment variable CDN_STORAGE. This option is deprecated in favor of the TFJS_NODE_ prefix version above and will be removed in a future release.
CDN_STORAGE="https://yourmirrorofchoice.com/" npm install <package>
(or)
CDN_STORAGE="https://yourmirrorofchoice.com/" yarn install <package>
If your "mirror" uses a custom URI path that doesn't match the default, you have 2 options (in order of priority):

Set the environment variable TFJS_NODE_BASE_URI
TFJS_NODE_BASE_URI="https://yourhost.com/your/path/libtensorflow-" npm install <package>
(or)
TFJS_NODE_BASE_URI="https://yourhost.com/your/path/libtensorflow-" yarn install <package>
Add the variable TFJS_NODE_BASE_URI to your .npmrc file
TFJS_NODE_BASE_URI=https://yourhost.com/your/path/libtensorflow-
Using the binding
Before executing any TensorFlow.js code, import the node package:

// Load the binding
const tf = require('@tensorflow/tfjs-node');

// Or if running with GPU:
const tf = require('@tensorflow/tfjs-node-gpu');
Note: you do not need to add the @tensorflow/tfjs package to your dependencies or import it directly.












































































MNIST demo for Node.js
See the tfjs-examples repository for training the MNIST dataset using the Node.js bindings.

Optional: Build optimal TensorFlow from source
To get the most optimal TensorFlow build that can take advantage of your specific hardware (AVX512, MKL-DNN), you can build the libtensorflow library from source:

Install bazel
Checkout the main tensorflow repo and follow the instructions in here with one difference: instead of building the pip package, build libtensorflow:
./configure
bazel build --config=opt --config=monolithic //tensorflow/tools/lib_package:libtensorflow
The build might take a while and will produce a bazel-bin/tensorflow/tools/lib_package/libtensorflow.tar.gz file, which should be unpacked and replace the files in deps folder of tfjs-node repo:

cp bazel-bin/tensorflow/tools/lib_package/libtensorflow.tar.gz ~/myproject/node_modules/@tensorflow/tfjs-node/deps
cd path-to-my-project/node_modules/@tensorflow/tfjs-node/deps
tar -xf libtensorflow.tar.gz
If you want to publish an addon library with your own libtensorflow binary, you can host the custom libtensorflow binary and optional pre-compiled node addon module on the cloud service you choose, and add a custom-binary.json file in scripts folder with the following information:

{
  "tf-lib": "url-to-download-customized-binary",
  "addon": {
    "host": "host-of-pre-compiled-addon",
    "remote_path": "remote-path-of-pre-compiled-addon",
    "package_name": "file-name-of-pre-compile-addon"
  }
}
The installation scripts will automatically catch this file and use the custom libtensorflow binary and addon. If addon is not provided, the installation script will compile addon from source.

Readme
Keywords
none*/
export const BASE_URL = "https://api.deepai.org/api/text2img"
export const basic = ["red","long","short","and","coloured","body","bird","birds", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "brown", "head","beak", "wings","wing","feather", "feathers", "claws", "tail","with", "legs", "eyes", "crest", "breast", "belly","bleak"]


