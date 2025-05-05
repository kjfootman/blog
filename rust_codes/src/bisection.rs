use std::error::Error;

pub fn bisec<F: Fn(f64) -> f64>(
    low: f64,
    high: f64,
    func: F,
    iMax: usize,
    criterion: f64,
) -> Result<f64, Box<dyn Error>> {
    // Bisection method
    let mut low = low;
    let mut high = high;
    let mut mid = 0.0;

    let mut iter = 0;
    let mut y = f64::MAX;

    while y.abs() > criterion && iter < iMax {
        mid = 0.5 * (low + high);
        y = func(mid);

        if func(low) * y < 0.0 {
            high = mid;
        }

        if func(high) * y < 0.0 {
            low = mid;
        }

        println!("i = {iter:<5.3}x: {mid:<5.4}  residual: {:.2E}", y.abs());

        iter += 1;
    }

    if iter == iMax {
        Err("Maximum iteration exceeded.")?
    }

    Ok(mid)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn bisection_test() -> Result<(), Box<dyn Error>> {
        let low = 0.0;
        let high = 7.0;
        let iMax = 100;
        let criterion = 1E-5;
        let func = |x: f64| -> f64 { x.powi(2) - 1.0 };

        let solution = bisec(low, high, func, iMax, criterion)?;

        println!("\nsolution: {solution:.4}");

        Ok(())
    }
}