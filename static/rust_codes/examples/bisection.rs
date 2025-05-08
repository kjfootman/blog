const IMAX: usize = 100;
const CRITERION: f64 = 1E-5;

fn main() {
    // Bisection method
    let mut low = 0.0;
    let mut high = 5.0;

    let mut iter = 0;
    let mut y = f64::MAX;

    while y.abs() > CRITERION && iter < IMAX {
        let mid = 0.5 * (low + high);
        y = func(mid);

        if func(low) * y < 0.0 {
            high = mid;
        }

        if func(high) * y < 0.0 {
            low = mid;
        }

        println!("i = {iter:<5.3}mid: {mid:<5.4}  residual: {:.2E}", y.abs());

        iter += 1;
    }
}

fn func<T: Into<f64>>(x: T) -> f64 {
    let x: f64 = x.into();

    x.powi(2) - 1.0
}

#[cfg(test)]
mod tests {
    #[test]
    fn bisection_test() -> std::io::Result<()> {
        Ok(())
    }
}
