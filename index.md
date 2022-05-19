## Welcome to Yipeng Guo's GitHub Pages

# FRQ
### Question 1
##### (a)
`$r'(3.1) \approx \dfrac{r(6.2)-r(0)}{6.2-0} = \dfrac{1}{31} \dfrac{centimeters}{centimeters}$`

##### (b)
`$\dfrac{1}{20} \int_{0}^{20}r(h)\,dh$` is the average radius of this bottle.

`$\dfrac{1}{20} \int_{0}^{20}r(h)\,dh \approx \dfrac{1}{20}(\dfrac{1}{2}(2.5+2.7)(6.2-0)+\dfrac{1}{2}(2.7+4.3)(13-6.2)+\dfrac{1}{2}(4.3+2.6)(20-13))=3.2035 \; centimeters$` 

##### (c)
`$f'(12) = -0.5359 \lt 0$`
Therefore, the radius is decreasing as `$h$` increases at `$h=12$`

##### (d)
Volume = `$\pi \int_0^{20}(f(h))^2\,dh = 1007.112$`

### Question 2
##### (a)
`$t = 2.831$` since `$x'(t)$` changes from positive to negative at `$t=2.831$`

##### (b)
`$\int_{1}^{4}|x'(t)| \,dt = 10.556$`

##### (c)
Velocity`$ = x'(4) = -6.587 \lt 0$`
Acceleration `$ = x''(4) = -1.732 \lt 0$`
The speed is increasing at `$t=4$` since velocity and acceleration have the same sign at this time.

##### (d)
`$x(5) = x(0) + \int_{0}^{5}x'(t) \, dt = -0.566$`
`$x(t)$` is twice differentiable `$\Rightarrow x(t)$` is continous on `$[0,5]$`, `$x(0)=2 \gt 0 \; and \; x(5) = -0.566 \lt 0$`.
By the Intermediate Value Theorem, there is a time `$t$`, for `$0 \lt t \lt 5$`, such that `$x(t) = 0$`.


### Question 3
##### (a)

`$g'(x) = f(x)$`, `$g(x)$` is decreasing on `$(1,3)$` since `$g'(x)$` is negative

##### (b)
`$g''(x) = f'(x)$`, `$g''(-\dfrac{1}{2})=f'(-\dfrac{1}{2}) = 1$`

##### (c)
`$g'(x) = f(x)=0 \Rightarrow x = 1 $`
`$g(-1) = \int_{0}^{-1}f(t)\,dt=-1.5$`
`$g(1) = \int_{0}^{1}f(t)\,dt=1$`
`$g(3) = \int_{0}^{3}f(t)\,dt=-1$`

| x | g(x) |
| --- | --- |
| -1 | -1.5 |
| 1 | 1 |
| 3 | -1 |

The absolute minimum value of g on the cloesed interval `$[-1,3]$` is `$-1.5$`

##### (d)
`$h'(x)=\dfrac{1}{g(x)}g'(x)$`
`$g'(\dfrac{3}{2}) = f(\dfrac{3}{2}) = -1$`
`$g(\dfrac{3}{2}) = \int_{0}^{\frac{3}{2}}f(t)\,dt=\dfrac{3}{4}$`
`$h'(\dfrac{3}{2}) = \dfrac{g'(\frac{3}{2})}{g(\frac{3}{2})} = \dfrac{-4}{3}$`


### Question 4

##### (a)
`$\dfrac{dS}{dt}\bigg|_{S=6}=-\dfrac{1}{6}(6-36) = 5, \dfrac{dS}{dt} \bigg|_{S=30}=-\dfrac{1}{6}(30-36) = 1$`

Because `$\dfrac{dS}{dt}\bigg|_{S=6} \gt \dfrac{dS}{dt}\bigg|_{S=30}$`, the amount of salt changes more rapidly when the water contains `$6$` pounds of salt.

##### (b)
`$\dfrac{d^{2}S}{dt^2}=-\dfrac{1}{6}\dfrac{dS}{dt}=\dfrac{1}{36}(S-36)$`

`$\dfrac{d^{2}S}{dt^2}\bigg|_{S=20}=-\dfrac{4}{9}$`

the changing rate of salt in the water decerases at `$\dfrac{4}{9}$` pounds per minute per minute when there are 20 pounds of salt in the water.

##### (c)
`$\dfrac{dS}{dt}= -\dfrac{1}{6}(S-36)$`

`$\int \dfrac{1}{S-36}dS = \int \dfrac{-1}{6}dt$`

`$\ln|S-36| = -\dfrac{1}{6}t + C$`
Because `$S(0) = 0 < 36, |S-36| = 36 - S$`
`$\ln|0-36| = -\dfrac{1}{6}(0)+C \Rightarrow \ln(36) = C$`
`$36 - S=36e^{-\frac{1}{6}t}$`
`$S(t) = 36 - 36e^{-\frac{1}{6}t}, t\geq 0$`


### Question 5
##### (a)
`$f(5) = \dfrac{125}{e^5}$`

`$f'(x) = \dfrac{3x^2e^x - e^xx^3}{e^{2x}} = \dfrac{3x^2 - x^3}{e^{x}}, f'(5) = \dfrac{-50}{e^5} $`

The tangent line is `$ y = \dfrac{-50}{e^5}(x-5) + \dfrac{125}{e^5}$`


##### (b)
`$ y = \displaystyle \lim_{x \to \infty} f(x) $` 

since `$\displaystyle \lim_{x \to \infty} x^3 = \infty \;and\; \displaystyle \lim_{x \to \infty} e^x = \infty$`
Using L'Hospital's Rule
`$y = \displaystyle \lim_{x \to \infty} f(x) = \displaystyle \lim_{x \to \infty} \dfrac{x^3}{e^x} = \displaystyle \lim_{x \to \infty} \dfrac{3x^2}{e^x} = \displaystyle \lim_{x \to \infty} \dfrac{6x}{e^x}=\displaystyle \lim_{x \to \infty} \dfrac{6}{e^x} = 0$`
Therefore, `$y = 0 \; (x-axis) $` is an asymptote for the graph of `$f$`.

##### (c)
`$f'(x) = \dfrac{3x^2e^x - e^xx^3}{e^{2x}} = \dfrac{3x^2 - x^3}{e^{x}} = 0 \, \Rightarrow \; 3x^2-x^3 = 0$`
The function f has critical points at `$x = 0 \;and\; x= 3$`.
`$f'(x)$` does not change sign at `$x=0$`. Therefore, `$f$` has neither a relative maximum nor a realtive minimum at `$x=0$`.   
`$f'(x)$` changes sign from positive to negative at `$x=0$`. Therefore, `$f$` has a relative maximum at `$x=3$`.

##### (d)
`$\dfrac{\int_{-1}^5f'(x)dx}{5-(-1)} = \dfrac{1}{6}f(x)\bigg|_{-1}^{5} = \dfrac{1}{6}(f(5)-f(-1))=\dfrac{1}{6}(\dfrac{125}{e^5}-\dfrac{-1}{e^{-1}}) = \dfrac{125+e^6}{6e^5}$`


### Question 6
##### (a)
`$\dfrac{d}{dx}(x^2-xy+2y^2) = \dfrac{d}{dx}(7)\;\Rightarrow \;2x-y-x\dfrac{dy}{dx}+4y\dfrac{dy}{dx} = 0$`
`$\Rightarrow(4y-x)\dfrac{dy}{dx} = y-2x \;\Rightarrow\; \dfrac{dy}{dx} = \dfrac{y-2x}{4y-x} $`

##### (b)
`$4y-x = 0 \; \Rightarrow \; x = 4y$`
`$x^2-xy+2y^2=7 \; \Rightarrow \; (4y)^2 - (4y)y+2y^2=7 \; \Rightarrow \; y^2 = \dfrac{1}{2}$`
Therefore, `$ y = \sqrt{\dfrac{1}{2}} \; and \; y = -\sqrt{\dfrac{1}{2}}$`

##### (c)
`$\dfrac{d^2y}{dx^2} = \dfrac{(\dfrac{dy}{dx}-2)(4y-x) - (4\dfrac{dy}{dx}-1)(y-2x)}{(4y-x)^2}$`
`$\dfrac{dy}{dx}\bigg|_{(1,2)} = 0$` since the tangent line to the curve at the point `$(1,2)$` is horizontal.
`$\dfrac{d^2y}{dx^2}\bigg|_{(1,2)} = \dfrac{(0-2)(8-1)-(0-1)(2-2)}{(8-1)^2} = -\dfrac{2}{7}$`
Therefore, the curve is concave down at the point `$(1,2)$` since `$\dfrac{d^2y}{dx^2}\bigg|_{(1,2)} \lt 0 $`
